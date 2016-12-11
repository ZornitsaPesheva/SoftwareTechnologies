using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
namespace Solutions.Models
{
    public class Course
    {
        public Course()
        {

        }

        public Course(string name, int moduleId)
        {
            this.Name = name;
            this.ModuleId = moduleId;
        }

        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(255)]
        public string Name { get; set; }

        [ForeignKey("Module")]
        public int ModuleId { get; set; }
        public virtual Module Module { get; set; }
    }
}