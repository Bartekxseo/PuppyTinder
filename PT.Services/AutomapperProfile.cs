using AutoMapper;
using PT.Domain.Entities;
using PT.Services.Enums.Model;
using System.Linq;

namespace PT.Services
{
    public class AutomapperProfile : Profile
    {
        public AutomapperProfile()
        {
            CreateMap<Color, EnumViewModel>();
            CreateMap<EnumViewModel, Color>();
           
        }
    }
}
