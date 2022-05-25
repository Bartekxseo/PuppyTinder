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
            
           return new PTDbContext(@"Server=localhost\SQLEXPRESS;Database=PuppyTinderDB;Integrated Security=true;");
        }
    }
}
