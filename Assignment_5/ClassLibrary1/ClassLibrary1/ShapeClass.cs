namespace ShapeSystem;

using System;
using System;
using System.Collections.Generic;



// Contract
public interface IShape
{
    double GetArea();
}

// Circle
public class Circle : IShape
{
    private double radius;

    public Circle(double radius)
    {
        if (radius <= 0)
            throw new ArgumentException("Radius must be positive.");

        this.radius = radius;
    }

    public double GetArea()
    {
        return Math.PI * radius * radius;
    }
}

// Rectangle
public class Rectangle : IShape
{
    private double width;
    private double height;

    public Rectangle(double w, double h)
    {
        if (w <= 0 || h <= 0)
            throw new ArgumentException("Dimensions must be positive.");

        width = w;
        height = h;
    }

    public double GetArea()
    {
        return width * height;
    }
}

// Triangle
public class Triangle : IShape
{
    private double Base;
    private double Height;

    public Triangle(double b, double h)
    {
        if (b <= 0 || h <= 0)
            throw new ArgumentException("Dimensions must be positive.");

        Base = b;
        Height = h;
    }

    public double GetArea()
    {
        return Base * Height / 2;
    }
}