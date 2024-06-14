from PIL import Image

for i in range(1, 6):
    print(i)
    
    
    # Open the JPEG image
    jpeg_image = Image.open("src/assets/photos/"+str(i)+".jpeg")

    # Save the image as WebP
    jpeg_image.save("src/assets/photos/"+str(i)+".webp", "webp")
    
    