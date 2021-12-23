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

  [ODataRoutePrefix("odata/dbSinDarEla/VwBaseOrtes")]
  [Route("mvc/odata/dbSinDarEla/VwBaseOrtes")]
  public partial class VwBaseOrtesController : ODataController
  {
    private Data.DbSinDarElaContext context;

    public VwBaseOrtesController(Data.DbSinDarElaContext context)
    {
      this.context = context;
    }
    // GET /odata/DbSinDarEla/VwBaseOrtes
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.DbSinDarEla.VwBaseOrte> GetVwBaseOrtes()
    {
      var items = this.context.VwBaseOrtes.AsNoTracking().AsQueryable<Models.DbSinDarEla.VwBaseOrte>();
      this.OnVwBaseOrtesRead(ref items);

      return items;
    }

    partial void OnVwBaseOrtesRead(ref IQueryable<Models.DbSinDarEla.VwBaseOrte> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{Ort}")]
    public SingleResult<VwBaseOrte> GetVwBaseOrte(string key)
    {
        var items = this.context.VwBaseOrtes.AsNoTracking().Where(i=>i.Ort == key);
        this.OnVwBaseOrtesGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnVwBaseOrtesGet(ref IQueryable<Models.DbSinDarEla.VwBaseOrte> items);

  }
}
