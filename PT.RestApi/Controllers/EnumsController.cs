using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NLog;
using PT.Domain.Entities;
using PT.Services.Enums;
using PT.Services.Enums.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PT.RestApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnumsController : ControllerBase
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();
        private readonly IEnumService enumService;
        public EnumsController(IEnumService enumService)
        {
            this.enumService = enumService;
        }

        [HttpGet("getColors")]
        public List<EnumViewModel> getColors()
        {
            try
            {
                return enumService.getColors();
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("",ex);
            }
        }
    }
}
