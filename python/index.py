import json
from PIL import Image, ImageDraw

# Function to check if a pixel is black
def is_black_pixel(image, x, y):
    pixel = image.getpixel((x, y))
    return pixel == (0, 0, 0, 255)

# Function to draw a single pixel at a given point
def draw_point(draw, x, y, color):
    draw.point((x, y), fill=color)

# Function to process the image and points
def process_image(image_path, points_data):
    try:
        # Open the image
        image = Image.open(image_path)
        draw = ImageDraw.Draw(image)
        countPixels = 0;

        # Get the points to check based on the user input
        points_to_check = points_data["coords"]

        # Check each point and log the result, draw points on the image
        for point in points_to_check:
            x, y = point
            if is_black_pixel(image, x, y):
                #print("The pixel at ({}, {}) is black.".format(x, y))
                draw_point(draw, x, y, 'green')  # Draw a green pixel if the pixel is black
                countPixels+=1;
            else:
                #print("The pixel at ({}, {}) is not black.".format(x, y))
                draw_point(draw, x, y, 'red')    # Draw a red pixel if the pixel is not black


        # Save the processed image
        processed_image_path = "processed_image.png"
        image.save(processed_image_path)
        print("Image processed and saved as {}".format(processed_image_path))
        print("Number of points {}".format(countPixels))

    except Exception as e:
        print("An error occurred: {}".format(e))

# Main function
def main():
    # Hypothetical JSON data
    points_data = {
        "width": 600,
        "height": 300,
        "coords": [[480,259],[452,21],[389,207],[319,261],[470,65],[259,73],[522,279],[406,91],[296,32],[358,206],[106,247],[507,254],[427,265],[259,47],[104,209],[478,219],[388,81],[543,166],[58,193],[164,247],[125,269],[42,166],[516,207],[367,73],[303,220],[377,70],[348,107],[390,254],[519,135],[128,39],[515,119],[277,25],[376,242],[123,147],[110,131],[428,132],[220,89],[20,170],[479,258],[240,27],[75,86],[303,225],[246,192],[505,196],[26,221],[133,174],[275,154],[458,76],[423,20],[475,148],[528,29],[383,57],[256,90],[196,251],[150,279],[475,97],[173,43],[364,80],[15,224],[291,282],[473,40],[505,140],[292,126],[359,12],[330,104],[475,62],[588,160],[244,142],[155,267],[153,183],[210,145],[344,262],[410,110],[212,109],[153,72],[24,219],[300,223],[174,167],[57,287],[15,127],[554,240],[262,280],[498,197],[67,118],[287,236],[69,244],[417,114],[423,196],[82,48],[153,269],[223,25],[203,42],[319,169],[439,126],[56,87],[85,243],[29,52],[406,282],[67,63],[544,111],[218,251],[341,223],[178,41],[440,287],[170,66],[236,14],[32,199],[173,105],[286,43],[158,34],[171,217],[376,28],[189,184],[146,254],[11,105],[60,101],[86,208],[549,20],[143,53],[336,222],[377,279],[427,144],[391,165],[477,16],[76,29],[175,132],[393,40],[104,161],[51,178],[231,120],[322,37],[163,90],[114,156],[503,96],[194,235],[342,191],[391,43],[467,30],[136,77],[562,215],[289,145],[100,250],[302,196],[75,167],[508,201],[243,217],[269,54],[181,232],[340,35],[197,21],[14,165],[232,86],[113,138],[575,228],[114,120],[549,32],[293,289],[456,161],[230,165],[426,218],[275,196],[397,276],[316,257],[42,127],[529,177],[366,134],[506,106],[241,253],[408,35],[200,249],[390,125],[524,85],[283,33],[242,255],[124,135],[505,68],[539,40],[119,72],[25,247],[530,134],[493,254],[580,147],[90,220],[562,144],[541,271],[39,253],[414,224],[234,104],[445,263]]
    }

    # Image path and number of pixels to check
    image_path = '100-logo-coordinates.png'

    # Process the image
    process_image(image_path, points_data)

if __name__ == "__main__":
    main()
