import datetime

# Global state - Problematic for testing
shape_history = []

def manage_shapes(shapes_data):
    for data in shapes_data:
        # Problem 1: Deeply nested conditionals
        if data['type'] == 'circle':
            res = 3.14 * (data['r'] ** 2)
        elif data['type'] == 'square':
            res = data['side'] * data['side']
        
        # Problem 2: Mixed Responsibilities (Calculation + Formatting + Logging)
        timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
        output = f"[{timestamp}] Result for {data['type']}: {res}"
        
        print(output)
        shape_history.append(output)
        
        with open("log.txt", "a") as f:
            f.write(output + "\n")