using System;
using System.Collections.Generic;
using System.Text;
using ShapeSystem;

namespace ShapeSystem
{
    internal class ReportLogger
    {
        public interface Log
        {
            string GetReport(string type, double Area);
        }

        public class ShapeService
        {
            private readonly Log logger;

            public ShapeService(Log logger)
            {
                this.logger = logger;
            }

            public class Report : Log
            {
                public string GetReport(string type, double Area)
                {
                    return $" DEBUG: Shape: {type} Area: {Area}, Date: {DateTime.Now}";
                }
            }

        }
    }
}
