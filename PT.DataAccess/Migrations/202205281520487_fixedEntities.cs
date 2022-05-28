namespace PT.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class fixedEntities : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Animal", "IsMale", c => c.Boolean(nullable: false));
            AddColumn("dbo.Shelter", "Description", c => c.String(maxLength: 500));
            DropColumn("dbo.Animal", "Male");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Animal", "Male", c => c.Boolean(nullable: false));
            DropColumn("dbo.Shelter", "Description");
            DropColumn("dbo.Animal", "IsMale");
        }
    }
}
