import numpy as np
import sys
from PIL import Image

img = Image.open(sys.argv[1])
img = img.convert("RGBA")
pix = np.array(img)

img = Image.fromarray(pix)

img.save(sys.argv[2],"PNG")
