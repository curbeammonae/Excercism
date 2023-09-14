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


    // Define a class (constructor function) named Position with two fields, x and y that store the current horizontal and vertical position, respectively, of the window's upper left corner. The constructor function should accept initial values for these fields. The value for x is provided as the first parameter, the value for y as the second one. The default value should be 0 for both fields.

    // The position (0, 0) is the upper left corner of the screen with x values getting larger as you move right and y values getting larger as you move down.
    
    // Also define a method move(newX, newY) that takes new x and y parameters and changes the properties to reflect the new positi

    function Position(x = 0, y = 0) {
        this.x = x
        this.y = y
        }
        Position.prototype.move = function move(newX, newY) {
        this.x = newX
        this.y = newY
        }

        // Define a ProgramWindow class with the following fields:

        // screenSize: holds a fixed value of type Size with width 800 and height 600
        // size : holds a value of type Size, the initial value is the default value of the Size instance
        // position : holds a value of type Position, the initial value is the default value of the Position instance
        // When the window is opened (created), it always has the default size and position in the beginning.
        
        // const programWindow = new ProgramWindow();
        // programWindow.screenSize.width;
        // // => 800
        
        // // Similar for the ot

        export class ProgramWindow {
            constructor() {
            this.screenSize = new Size(800, 600)
            this.size = new Size();
            this.position = new Position();
            }
        }

        // The ProgramWindow class should include a method resize. It should accept a parameter of type Size as input and attempts to resize the window to the specified size.

        // However, the new size cannot exceed certain bounds.
        
        // The minimum allowed height or width is 1. Requested heights or widths less than 1 will be clipped to 1.
        // The maximum height and width depend on the current position of the window, the edges of the window cannot move past the edges of the screen. Values larger than these bounds will be clipped to the largest size they can take. E.g. if the window's position is at x = 400, y = 300 and a resize to height = 400, width = 300 is requested, then the window would be resized to height = 300, width = 300 as the screen is not large enough in the y direction to fully accommodate the req
        resize(newSize) {
            const maxWidth = this.screenSize.width - this.position.x
            const maxHeight = this.screenSize.height - this.position.y
            const newWidth = Math.max(1, Math.min(newSize.width, maxWidth))
            const newHeight = Math.max(1, Math.min(newSize.height, maxHeight))
            this.size.resize(newWidth, newHeight)
            }