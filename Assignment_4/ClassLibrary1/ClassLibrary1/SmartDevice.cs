using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Linq;

namespace MiniSmartHome
{
    public abstract class SmartDevice
    {
        public string DeviceID {get;}
        public string DeviceName {get;}
        public PowerModule Power {get;}

        public SmartDevice(string deviceID, string deviceName, PowerModule power)
        {
            DeviceID = deviceID;
            DeviceName = deviceName;
            Power = new PowerModule();
        }

        protected SmartDevice(string deviceID, string name)
        {
            DeviceID = deviceID;
            DeviceName = name;
            Power = new PowerModule();
        }

        public void Rename(string newName)
        {
            if (string.IsNullOrWhiteSpace(newName))
                throw new ArgumentException("Name cannot be blank.", nameof(newName));
        }

        public virtual void SetOnline (bool online)
        {
            Power.SetOnline(online);
        }

        public virtual void TurnOn() 
        { 
            Power.TurnOn();
        }

        public virtual void TurnOff()
        {
            Power.TurnOff(); 
        }

        public abstract string GetStatus(); // Abstract methods are rules ex.
                                            // "every device must tell me its status however the base class doesnt know how, so each device defines its own.
        
    }
}
