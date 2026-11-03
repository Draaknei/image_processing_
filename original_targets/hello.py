import argparse
import sys
from pathlib import Path

from PIL import Image, ImageColor, ImageOps

EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp", ".bmp"}


def parse_size(value):
    try:
        width, height = value.lower().split("x")
        width, height = int(width), int(height)
        if width <= 0 or height <= 0:
            raise ValueError
        return width, height
    except ValueError:
        raise argparse.ArgumentTypeError("size must look like 1000x1000")


def parse_color(value):
    try:
        return ImageColor.getrgb(value)
    except ValueError:
        raise argparse.ArgumentTypeError(f"unknown color: {value}")


def resize_with_padding(image, size, color):
    image = ImageOps.exif_transpose(image)

    if image.mode in ("RGBA", "LA") or (
        image.mode == "P" and "transparency" in image.info
    ):
        rgba = image.convert("RGBA")
        flat = Image.new("RGB", rgba.size, color)
        flat.paste(rgba, mask=rgba.getchannel("A"))
        image = flat
    else:
        image = image.convert("RGB")

    fitted = ImageOps.contain(image, size, method=Image.LANCZOS)
    canvas = Image.new("RGB", size, color)
    offset = ((size[0] - fitted.width) // 2, (size[1] - fitted.height) // 2)
    canvas.paste(fitted, offset)
    return canvas


def main():
    parser = argparse.ArgumentParser(
        description="Resize every image in a folder to the same size without stretching, filling the extra space with a color."
    )
    parser.add_argument(
        "input",
        nargs="?",
        default=".",
        help="folder with the images (default: current folder)",
    )
    parser.add_argument(
        "-o", "--output", default="resized", help="output folder (default: resized)"
    )
    parser.add_argument(
        "-s",
        "--size",
        type=parse_size,
        default=(1000, 1000),
        help="final size, e.g. 1200x800 (default: 1000x1000)",
    )
    parser.add_argument(
        "-c",
        "--color",
        type=parse_color,
        default=(0, 0, 0),
        help="padding color, name or hex like '#0b1f3a' (default: black)",
    )
    args = parser.parse_args()

    input_dir = Path(args.input)
    output_dir = Path(args.output)

    if not input_dir.is_dir():
        sys.exit(f"Folder not found: {input_dir}")

    files = sorted(
        p for p in input_dir.iterdir() if p.is_file() and p.suffix.lower() in EXTENSIONS
    )
    if not files:
        sys.exit(f"No images found in {input_dir}")

    output_dir.mkdir(parents=True, exist_ok=True)

    seen = set()
    done = 0
    for path in files:
        target = output_dir / f"{path.stem}.png"
        if target in seen:
            print(f"Skipped {path.name}: another file already produces {target.name}")
            continue
        seen.add(target)

        try:
            with Image.open(path) as image:
                result = resize_with_padding(image, args.size, args.color)
            result.save(target, "PNG")
            print(f"OK   {path.name} -> {target}")
            done += 1
        except Exception as error:
            print(f"FAIL {path.name}: {error}")

    print(
        f"\nDone: {done} of {len(files)} images saved to {output_dir} at {args.size[0]}x{args.size[1]}"
    )


if __name__ == "__main__":
    main()
