using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Entities
{
    public class Customer
    {
        [Key]
        public int CustomerId { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        [StringLength(10)]
        [RegularExpression("^[0-9]{10}$")]
        public string PhoneNumber { get; set; }
    }

    public class Visit
    {
        [Key]
        public int VisitId { get; set; }
        [Required]
        public DateTime VisitedOn { get; set; }
        [Required]
        public int CustomerId { get; set; }

    }

    public class Service
    {
        [Key]
        public int ServiceId { get; set; }
        [Required]
        [StringLength(50)]
        public string ServiceName { get; set; }
    }

    public class VisitService
    {
        [Key]
        public int VisitServiceId { get; set; }
        [Required]
        public int VisitId { set; get; }
        [Required]
        public int ServiceId { set; get; }
    }
}
