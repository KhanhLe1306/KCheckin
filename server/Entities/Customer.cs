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
}
