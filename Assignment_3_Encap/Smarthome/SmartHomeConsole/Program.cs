
using SmarthomeLib;

var hub = new SmartHomeHub();

// You will add your devices here once you implement them.
// Example flow you should be able to run by the end:
// - create devices
// - SetOnline(true)
// - TurnOn()
// - ApplyModeToAll("Night")
// - PrintAllStatuses()

Console.WriteLine("SmartHomeConsole starting...");
Console.WriteLine("Add device creation and hub actions once classes are implemented.");

SmartLight light = new SmartLight();
SmartTemperature temp = new SmartTemperature();
SecurityCamera cam = new SecurityCamera(350);

List<SmartDevice> devices = new List<SmartDevice> { light, temp, cam };

foreach (SmartDevice d in devices)
{
    d.SetOnline(true);
}

foreach (SmartDevice d in devices)
{
    d.TurnOn();
}

foreach (SmartDevice d in devices)
{
    d.ApplyMode("Night");
}

foreach (SmartDevice d in devices)
{
    Console.WriteLine(d.GetStatus());
}