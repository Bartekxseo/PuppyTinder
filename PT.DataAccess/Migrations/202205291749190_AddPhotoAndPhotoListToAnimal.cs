namespace PT.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddPhotoAndPhotoListToAnimal : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Photo",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Path = c.String(),
                        FileName = c.String(),
                        AnimalId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Animal", t => t.AnimalId)
                .Index(t => t.AnimalId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Photo", "AnimalId", "dbo.Animal");
            DropIndex("dbo.Photo", new[] { "AnimalId" });
            DropTable("dbo.Photo");
        }
    }
}
