using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SinDarElaMobile.Models.DbSinDarEla
{
  [Table("Benutzer")]
  public partial class Benutzer
  {
    [Key]
    public string BenutzerID
    {
      get;
      set;
    }
    public string AspNetUsers_Id
    {
      get;
      set;
    }
    public int BaseID
    {
      get;
      set;
    }

    public Base Base { get; set; }
    public string Benutzername
    {
      get;
      set;
    }
    public string Initialen
    {
      get;
      set;
    }
    public string BenutzerEMail
    {
      get;
      set;
    }
    public string Notiz
    {
      get;
      set;
    }
    public int? LetzteKundenID
    {
      get;
      set;
    }
    public int? LetzteMitarbeiterID
    {
      get;
      set;
    }
    public int? LetzteBaseID
    {
      get;
      set;
    }
    public int? LetzteBenutzerID
    {
      get;
      set;
    }
  }
}
