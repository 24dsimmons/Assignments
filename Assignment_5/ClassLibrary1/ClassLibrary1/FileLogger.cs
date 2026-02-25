using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.Runtime.CompilerServices;

namespace ShapeSystem
{
    public interface ILog
    {
        void Log(string message);
    }

    public class FileLogger : ILog
    {
        private readonly string filePath;

        public FileLogger(string path)
        {
            filePath = path;
        }

        public void Log(string message)
        {
            File.AppendAllText(filePath,
                message + Environment.NewLine);
        }
    }
}