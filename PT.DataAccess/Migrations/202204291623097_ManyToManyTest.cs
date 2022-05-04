namespace PT.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ManyToManyTest : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.AnimalCharacter",
                c => new
                    {
                        Animal_Id = c.Int(nullable: false),
                        Character_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Animal_Id, t.Character_Id })
                .ForeignKey("dbo.Animal", t => t.Animal_Id)
                .ForeignKey("dbo.Character", t => t.Character_Id)
                .Index(t => t.Animal_Id)
                .Index(t => t.Character_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.AnimalCharacter", "Character_Id", "dbo.Character");
            DropForeignKey("dbo.AnimalCharacter", "Animal_Id", "dbo.Animal");
            DropIndex("dbo.AnimalCharacter", new[] { "Character_Id" });
            DropIndex("dbo.AnimalCharacter", new[] { "Animal_Id" });
            DropTable("dbo.AnimalCharacter");
        }
    }
}
