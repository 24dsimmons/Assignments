namespace ShapeSystem;

using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection.Metadata.Ecma335;
using static ShapeSystem.ShapeClass;

public class ShapeClass

    {
       
    public static List<string> History = new List<string>();

// This says that any class must agree to provide these methods! Like a contract between two parties, lists what methods a class must implement
// Does not tell a class how those methods are implemented. 
public interface ProcessShape
    {
        // This means that any shape we create must do two things:
        // 1. Calculate the area
        // 2. Return the area as a double
        double GetArea();
    }
    public class Circle:ProcessShape
    {
        private double radius;
         
        public double GetArea()
        {
            return Math.PI * radius * radius;
        }
    }

    public class Rectangle : ProcessShape
    {
        private double width;
        private double height;

        public Rectangle(double w, double h) // Rectangle Constructor! reuns when a new rectangle is made. 
        {
            width = w;
            height = h; //Defining Alliases for the corresponding values!
        }

        public double GetArea()
        {
            return width * height;
        }

        public class Triangle : ProcessShape
        {
            private double Base;
            private double Height;

            public Triangle(double b, double h)
            {
                Base = b;
                Height = h;
            }

            public double GetArea()
            {
                return Base * Height / 2;
            }
        }
        public interface Log
        {
             string GetReport();
        }

        public class Report : Log
        {
            public string GetReport() {
                return $" DEBUG: Shape: {type} Area: {Area}, Date: {DateTime.Now}";
        }
     }
    }



        




