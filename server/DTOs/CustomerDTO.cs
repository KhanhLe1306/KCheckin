namespace server.DTOs
{
    public class CustomerDTO
    {
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public IEnumerable<string> Services { get; set; }
    }

}
