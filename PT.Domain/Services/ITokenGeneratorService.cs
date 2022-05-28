using System;
using System.Collections.Generic;
using System.Text;

namespace PT.Domain.Services
{
    public interface ITokenGeneratorService
    {
        string generateToken(int length);
    }
}
