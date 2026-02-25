namespace ShapeSystem;

using System;

public class ShapeService
{
    private readonly ILog logger;

    public ShapeService(ILog logger)
    {
        this.logger = logger;
    }

    public void ProcessShape(IShape shape)
    {
        double area = shape.GetArea();

        string report =
            $"Area: {area}, Date: {DateTime.Now}";

        logger.Log(report);
    }
}