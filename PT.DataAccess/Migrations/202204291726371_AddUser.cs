namespace PT.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddUser : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.User",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Username = c.String(nullable: false),
                        Email = c.String(),
                        PasswordHash = c.String(nullable: false),
                        Token = c.String(nullable: false),
                        UserType = c.Int(nullable: false),
                        ShelterId = c.Int(),
                        PreferenceId = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Preference", t => t.PreferenceId)
                .ForeignKey("dbo.Shelter", t => t.ShelterId)
                .Index(t => t.ShelterId)
                .Index(t => t.PreferenceId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.User", "ShelterId", "dbo.Shelter");
            DropForeignKey("dbo.User", "PreferenceId", "dbo.Preference");
            DropIndex("dbo.User", new[] { "PreferenceId" });
            DropIndex("dbo.User", new[] { "ShelterId" });
            DropTable("dbo.User");
        }
    }
}
