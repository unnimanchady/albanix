import os
from PIL import Image, ImageDraw, ImageFilter, ImageFont

def generate_hero():
    # Dimensions
    WIDTH = 1600
    HEIGHT = 1200
    
    # Create base image with transparency
    base = Image.new('RGBA', (WIDTH, HEIGHT), (255, 255, 255, 0))
    
    # Create a draw object
    draw = ImageDraw.Draw(base, 'RGBA')
    
    # 1. Draw a soft blue ambient glow in the background
    # We can fake a glow by drawing circles with varying opacities
    center_x = WIDTH // 2
    center_y = HEIGHT // 2
    
    # Glow
    for radius in range(500, 0, -10):
        opacity = int((500 - radius) / 500 * 20) # max 20 opacity
        draw.ellipse([center_x - radius, center_y - radius, center_x + radius, center_y + radius], fill=(23, 107, 255, opacity))
    
    # 2. Draw connecting lines
    line_color = (23, 107, 255, 100)
    # Diagonals to the modules
    # top-left
    draw.line([(center_x, center_y), (400, 300)], fill=line_color, width=4)
    # top-right
    draw.line([(center_x, center_y), (1200, 300)], fill=line_color, width=4)
    # bottom-left
    draw.line([(center_x, center_y), (400, 900)], fill=line_color, width=4)
    # bottom-right
    draw.line([(center_x, center_y), (1200, 900)], fill=line_color, width=4)
    
    # 3. Draw Central Platform Dashboard
    # A circle or a rounded rectangle
    platform_radius = 200
    draw.ellipse([center_x - platform_radius, center_y - platform_radius, 
                  center_x + platform_radius, center_y + platform_radius], 
                 fill=(7, 17, 31, 255), outline=(0, 194, 232, 255), width=4)
    
    # We don't have a reliable font, so we'll just draw a stylized shape or use default font
    try:
        font_large = ImageFont.truetype("arialbd.ttf", 60)
        font_small = ImageFont.truetype("arial.ttf", 30)
    except:
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()

    # Center Text
    text_albanix = "ALBANIX"
    # use textbbox to center
    bbox = draw.textbbox((0,0), text_albanix, font=font_large)
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]
    draw.text((center_x - w/2, center_y - h/2 - 20), text_albanix, fill=(255, 255, 255, 255), font=font_large)
    
    text_eco = "SOFTWARE ECOSYSTEM"
    bbox2 = draw.textbbox((0,0), text_eco, font=font_small)
    w2 = bbox2[2] - bbox2[0]
    h2 = bbox2[3] - bbox2[1]
    draw.text((center_x - w2/2, center_y + h/2), text_eco, fill=(0, 194, 232, 255), font=font_small)

    # 4. Paste the 4 product images
    # We will resize them and add a border
    img_dir = "public/images"
    modules = [
        {"file": "product-treatanywhere.png", "pos": (400, 300), "label": "HEALTHCARE"},
        {"file": "product-gym.png", "pos": (1200, 300), "label": "FITNESS"},
        {"file": "product-restaurant.png", "pos": (400, 900), "label": "RESTAURANT"},
        {"file": "product-van-sales.png", "pos": (1200, 900), "label": "DISTRIBUTION"},
    ]
    
    module_w = 480
    module_h = int(module_w * 0.65) # approximate aspect ratio
    
    for mod in modules:
        try:
            im_path = os.path.join(img_dir, mod["file"])
            if os.path.exists(im_path):
                im = Image.open(im_path).convert("RGBA")
                # Resize
                im = im.resize((module_w, module_h), Image.Resampling.LANCZOS)
                
                # Draw a background panel with drop shadow
                panel_w = module_w + 20
                panel_h = module_h + 80
                px = mod["pos"][0] - panel_w // 2
                py = mod["pos"][1] - panel_h // 2
                
                # drop shadow
                draw.rounded_rectangle([px-10, py-10, px+panel_w+10, py+panel_h+10], radius=15, fill=(23, 107, 255, 30))
                # panel background
                draw.rounded_rectangle([px, py, px+panel_w, py+panel_h], radius=15, fill=(255, 255, 255, 255), outline=(228, 234, 241, 255), width=2)
                
                # paste image
                base.paste(im, (px + 10, py + 60), im)
                
                # label
                draw.text((px + 20, py + 20), mod["label"], fill=(7, 17, 31, 255), font=font_small)
                
        except Exception as e:
            print(f"Failed to process {mod['file']}: {e}")
            pass

    # Save
    out_path = os.path.join(img_dir, "products-hero.png")
    base.save(out_path)
    print("Saved", out_path)

if __name__ == "__main__":
    generate_hero()
