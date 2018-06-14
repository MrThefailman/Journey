
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace Journy.Models
{
    public class NewVehicle
    {
        [Display(Name = "Id")]
        public virtual int Id { get; set; }

        [Required]
        [Display(Name = "VehicleType")]
        public virtual string VehicleType { get; set; }

        [Required]
        [Display(Name = "VehicleRegNr")]
        public virtual string VehicleRegNr { get; set; }

        [Required]
        [Display(Name = "VehicleBrand")]
        public virtual string VehicleBrand { get; set; }


    }
}