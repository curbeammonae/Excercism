// Define a class (constructor function) named Size. It should have two fields width and height that store the window's current dimensions. The constructor function should accept initial values for these fields. The width is provided as the first parameter, the height as the second one. The default width and height should be 80 and 60, respectively.

// Additionally, define a method resize(newWidth, newHeight) that takes a new width and height as parameters and changes the fields to reflect the new size

function Size(width = 80, height = 60) {
    this.width = width
    this.height = height
    }
    Size.prototype.resize = function resize(newWidth, newHeight) {
    this.width = newWidth
    this.height = newHeight
    }