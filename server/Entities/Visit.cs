using System.ComponentModel.DataAnnotations;

namespace server.Entities
{
    public class Visit
    {
        [Key]
        public int VisitId { get; set; }
        [Required]
        public DateTime VisitedOn { get; set; }
        [Required]
        public int CustomerId { get; set; }
    }
}