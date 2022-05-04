using AutoMapper;
using PT.DataAccess;
using PT.Domain.Entities;
using PT.Services.Enums.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PT.Services.Enums
{
    public class EnumService : IEnumService
    {
        private readonly PTDbContext ptDbContext;
        readonly IMapper mapper;
        public EnumService(PTDbContext ptDbContext,IMapper mapper)
        {
            this.ptDbContext = ptDbContext;
            this.mapper = mapper;
        }

        public List<EnumViewModel> getColors()
        {
            var ColorList = new List<EnumViewModel>();
            var Colors = ptDbContext.Set<Color>().AsNoTracking().ToList();
            mapper.Map(Colors, ColorList);
            return ColorList;
        }

    }
}
