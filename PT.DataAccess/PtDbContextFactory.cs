using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Text;

namespace PT.DataAccess
{
    public class PTDbContextFactory : IDbContextFactory<PTDbContext>
    {
        public PTDbContextFactory()
        {
        }

        public PTDbContext Create()
        {
            
            //return new PTDbContext(@"Server=dsrsql01.dsr.com.pl\dev;Database=Dev_MES-PT_Kelvion;User Id=mes-PT-kelvion;Password=P5-uC2;");
            return new PTDbContext(@"Server=localhost\SQLEXPRESS;Database=PuppyTinderDB;Integrated Security=true;");
        }
    }
}
