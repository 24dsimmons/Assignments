// See https://aka.ms/new-console-template for more information

using MiniSmartHome;
using System.Globalization;

Console.WriteLine("Program Started!");

var light = new SmartLight("L1", "Desk Light");
light.Rename("Bedroom Light");
light.SetOnline(true);
light.TurnOn();
light.SetBrightness(50);

Console.WriteLine(light.GetStatus());