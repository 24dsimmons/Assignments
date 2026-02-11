namespace MiniSmartHome

{
    public class PowerModule
    {
        public bool IsOnline { get; private set; }
        public bool IsPoweredOn { get; private set; }
        public PowerModule() { }
        public void SetOnline(bool online)
        {
            IsOnline = online;
        }
        public void TurnOn()
        {
            if (!IsOnline)
            {
                throw new InvalidOperationException("Device must be online to power on.");
            }
            IsPoweredOn = true;
        }

        public void TurnOff()
        {
            IsPoweredOn = false;
        }
    }
}
