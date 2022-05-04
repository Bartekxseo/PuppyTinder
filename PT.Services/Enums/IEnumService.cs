using PT.Services.Enums.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace PT.Services.Enums
{
    public interface IEnumService
    {
        List<EnumViewModel> getColors();
    }
}
