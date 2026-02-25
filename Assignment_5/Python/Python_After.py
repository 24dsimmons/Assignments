import datetime

def cal_circle_area (radius):
    return 3.14 * radius ** 2

def cal_square_area(side):
    return side ** 2


AREA_Functions = {
    "circle":lambda shape: cal_circle_area(shape["r"]),
    "square":lambda shape: cal_square_area(shape["side"])
}

def calculate_area(shape):
    func = AREA_Functions.get(shape["type"])
    if not func:
        raise ValueError (f"Unknown Shape Type: {shape['type']}")
    return func(shape)

def format_output(shape_type, result):
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    return f"[{timestamp}] Result for {shape_type}: {result}"


def log_output(message, history):
    print(message)
    history.append(message)


def manage_shapes(shapes_data):
    history = []

    for shape in shapes_data:
        area = calculate_area(shape)
        message = format_output(shape["type"], area)
        log_output(message, history)

    return history

if __name__ == "__main__":
    shapes = [
        {"type": "circle", "r": 5},
        {"type": "square", "side": 4}
    ]

    manage_shapes(shapes)