using System.ComponentModel.DataAnnotations;

namespace server.Entities
{
    public class Service
    {
        [Key]
        public int ServiceId { get; set; }
        [Required]
        [StringLength(50)]
        public string ServiceName { get; set; }
    }
}