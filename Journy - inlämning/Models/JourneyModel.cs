using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace Journy.Models
{
    public class JourneyModel
    {

        [Display(Name = "Id")]
        public virtual int Id { get; set; }

        [Required]
        [Display(Name = "ChosenVehicle")]
        public virtual string ChosenVehicle { get; set; }

        [Required]
        [Display(Name = "Date")]
        public virtual DateTime Date { get; set; }

        [Required]
        [Display(Name = "MilageStart")]
        public virtual int MilageStart { get; set; }

        [Display(Name = "MilageEnd")]
        public virtual int MilageEnd { get; set; }

        [Display(Name = "DistanceTraveleld")]
        public virtual int DistanceTraveled { get; set; }

        [Required]
        [Display(Name = "StartingAdress")]
        public virtual string StartingAdress { get; set; }

        [Display(Name = "ArrivalAdress")]
        public virtual string ArrivalAdress { get; set; }

        [Required]
        [Display(Name = "Matter")]
        public virtual string Matter { get; set; }

        [Display(Name = "Notes")]
        public virtual string Notes { get; set; }

    }
}