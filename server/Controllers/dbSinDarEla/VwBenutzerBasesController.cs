using System;
using System.Net;
using System.Data;
using System.Linq;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Mvc;

using Microsoft.AspNet.OData;
using Microsoft.AspNet.OData.Routing;
using Microsoft.AspNet.OData.Query;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;



namespace SinDarElaMobile.Controllers.DbSinDarEla
{
  using Models;
  using Data;
  using Models.DbSinDarEla;

  [ODataRoutePrefix("odata/dbSinDarEla/VwBenutzerBases")]
  [Route("mvc/odata/dbSinDarEla/VwBenutzerBases")]
  public partial class VwBenutzerBasesController : ODataController
  {
    private Data.DbSinDarElaContext context;

    public VwBenutzerBasesController(Data.DbSinDarElaContext context)
    {
      this.context = context;
    }
    // GET /odata/DbSinDarEla/VwBenutzerBases
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.DbSinDarEla.VwBenutzerBase> GetVwBenutzerBases()
    {
      var items = this.context.VwBenutzerBases.AsNoTracking().AsQueryable<Models.DbSinDarEla.VwBenutzerBase>();
      this.OnVwBenutzerBasesRead(ref items);

      return items;
    }

    partial void OnVwBenutzerBasesRead(ref IQueryable<Models.DbSinDarEla.VwBenutzerBase> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{AspNetUsers_Id}")]
    public SingleResult<VwBenutzerBase> GetVwBenutzerBase(string key)
    {
        var items = this.context.VwBenutzerBases.AsNoTracking().Where(i=>i.AspNetUsers_Id == key);
        this.OnVwBenutzerBasesGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnVwBenutzerBasesGet(ref IQueryable<Models.DbSinDarEla.VwBenutzerBase> items);

  }
}
