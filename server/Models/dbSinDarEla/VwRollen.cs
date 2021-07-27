using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SinDarElaMobile.Models.DbSinDarEla
{
  [Table("vwRollen")]
  public partial class VwRollen
  {
    [Key]
    public string Id
    {
      get;
      set;
    }
    public string Titel
    {
      get;
      set;
    }
  }
}
