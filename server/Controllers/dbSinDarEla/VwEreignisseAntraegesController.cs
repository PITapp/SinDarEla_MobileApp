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
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.AspNet.OData.Query;



namespace SinDarElaMobile.Controllers.DbSinDarEla
{
  using Models;
  using Data;
  using Models.DbSinDarEla;

  [ODataRoutePrefix("odata/dbSinDarEla/VwEreignisseAntraeges")]
  [Route("mvc/odata/dbSinDarEla/VwEreignisseAntraeges")]
  public partial class VwEreignisseAntraegesController : ODataController
  {
    private Data.DbSinDarElaContext context;

    public VwEreignisseAntraegesController(Data.DbSinDarElaContext context)
    {
      this.context = context;
    }
    // GET /odata/DbSinDarEla/VwEreignisseAntraeges
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.DbSinDarEla.VwEreignisseAntraege> GetVwEreignisseAntraeges()
    {
      var items = this.context.VwEreignisseAntraeges.AsNoTracking().AsQueryable<Models.DbSinDarEla.VwEreignisseAntraege>();
      this.OnVwEreignisseAntraegesRead(ref items);

      return items;
    }

    partial void OnVwEreignisseAntraegesRead(ref IQueryable<Models.DbSinDarEla.VwEreignisseAntraege> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{EreignisArtCode}")]
    public SingleResult<VwEreignisseAntraege> GetVwEreignisseAntraege(string key)
    {
        var items = this.context.VwEreignisseAntraeges.AsNoTracking().Where(i=>i.EreignisArtCode == key);
        this.OnVwEreignisseAntraegesGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnVwEreignisseAntraegesGet(ref IQueryable<Models.DbSinDarEla.VwEreignisseAntraege> items);

  }
}
