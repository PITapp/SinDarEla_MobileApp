using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SinDarElaMobile.Models.DbSinDarEla
{
  [Table("vwBaseOrte")]
  public partial class VwBaseOrte
  {
    [Key]
    public string Ort
    {
      get;
      set;
    }
  }
}
