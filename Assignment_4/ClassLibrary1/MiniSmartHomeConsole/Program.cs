// See https://aka.ms/new-console-template for more information

using MiniSmartHome;
using System.Globalization;

Console.WriteLine("Program Started!");

var light = new SmartLight("L1", "Desk Light");

// When the line above runs it puts in the constructor in Smart light and then that is transfered to the parent constructor so it can be structured in the way a smartdevice should be.
// Smart light doesnt control values that are printed those come from the parent constructor! 
light.Rename("Bedroom Light");
light.SetOnline(true);
light.TurnOn();
light.SetBrightness(50);

Console.WriteLine(light.GetStatus());