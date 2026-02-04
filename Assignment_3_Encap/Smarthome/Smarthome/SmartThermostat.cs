using System;

namespace SmarthomeLib;

public class SmartTemperature : SmartDevice
{
    private int temp;
    private string mode;

    
    public int Temperature => temp;
    public string Mode => mode;

  
    public SmartTemperature(string deviceId, string name) : base(deviceId, name)
    {
        temp = 72;         
    }

    public void SetTemperature(int value)
    {
        if (!IsPoweredOn)
        {
            Console.WriteLine("Device must be powered on to change temperature!");
            return;
        }

        if (value < 50 || value > 90)
        {
            Console.WriteLine("Temperature must be between 50 and 90 degrees!");
            return;
        }

        temp = value;
    }

    public override string GetStatus()
    {
        return $"Power: {IsPoweredOn}, Temperature: {temp}, Mode: {mode}";
    }

    public override void ApplyMode(string newMode)
    {
        if (!IsPoweredOn) return;

        if (newMode == "Night")
        {
            temp = 65;
            mode = newMode;
        }
        else
        {
            mode = newMode;
        }
    }
}