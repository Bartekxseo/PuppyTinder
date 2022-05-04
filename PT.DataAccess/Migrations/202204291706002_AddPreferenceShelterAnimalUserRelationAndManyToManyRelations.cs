namespace PT.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddPreferenceShelterAnimalUserRelationAndManyToManyRelations : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Preference",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Location = c.String(nullable: false),
                        YardSize = c.Single(),
                        LivingSpaceSize = c.Single(),
                        OtherAnimals = c.Boolean(nullable: false),
                        CatProtection = c.Boolean(nullable: false),
                        Description = c.String(maxLength: 500),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Shelter",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Location = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.AnimalUserRelation",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        RelationType = c.Int(nullable: false),
                        AnimalId = c.Int(nullable: false),
                        PreferenceId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Animal", t => t.AnimalId)
                .ForeignKey("dbo.Preference", t => t.PreferenceId)
                .Index(t => t.AnimalId)
                .Index(t => t.PreferenceId);
            
            CreateTable(
                "dbo.ColorPreference",
                c => new
                    {
                        Color_Id = c.Int(nullable: false),
                        Preference_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Color_Id, t.Preference_Id })
                .ForeignKey("dbo.Color", t => t.Color_Id)
                .ForeignKey("dbo.Preference", t => t.Preference_Id)
                .Index(t => t.Color_Id)
                .Index(t => t.Preference_Id);
            
            CreateTable(
                "dbo.PreferencePuppySize",
                c => new
                    {
                        Preference_Id = c.Int(nullable: false),
                        PuppySize_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Preference_Id, t.PuppySize_Id })
                .ForeignKey("dbo.Preference", t => t.Preference_Id)
                .ForeignKey("dbo.PuppySize", t => t.PuppySize_Id)
                .Index(t => t.Preference_Id)
                .Index(t => t.PuppySize_Id);
            
            CreateTable(
                "dbo.PreferenceSpecificAnimalKind",
                c => new
                    {
                        Preference_Id = c.Int(nullable: false),
                        SpecificAnimalKind_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Preference_Id, t.SpecificAnimalKind_Id })
                .ForeignKey("dbo.Preference", t => t.Preference_Id)
                .ForeignKey("dbo.SpecificAnimalKind", t => t.SpecificAnimalKind_Id)
                .Index(t => t.Preference_Id)
                .Index(t => t.SpecificAnimalKind_Id);
            
            CreateTable(
                "dbo.CharacterPreference",
                c => new
                    {
                        Character_Id = c.Int(nullable: false),
                        Preference_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Character_Id, t.Preference_Id })
                .ForeignKey("dbo.Character", t => t.Character_Id)
                .ForeignKey("dbo.Preference", t => t.Preference_Id)
                .Index(t => t.Character_Id)
                .Index(t => t.Preference_Id);
            
            AddColumn("dbo.Animal", "ShelterId", c => c.Int(nullable: false));
            AddColumn("dbo.Animal", "Shelter_Id", c => c.Int());
            CreateIndex("dbo.Animal", "ShelterId");
            CreateIndex("dbo.Animal", "Shelter_Id");
            AddForeignKey("dbo.Animal", "Shelter_Id", "dbo.Shelter", "Id");
            AddForeignKey("dbo.Animal", "ShelterId", "dbo.Shelter", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.AnimalUserRelation", "PreferenceId", "dbo.Preference");
            DropForeignKey("dbo.AnimalUserRelation", "AnimalId", "dbo.Animal");
            DropForeignKey("dbo.Animal", "ShelterId", "dbo.Shelter");
            DropForeignKey("dbo.Animal", "Shelter_Id", "dbo.Shelter");
            DropForeignKey("dbo.CharacterPreference", "Preference_Id", "dbo.Preference");
            DropForeignKey("dbo.CharacterPreference", "Character_Id", "dbo.Character");
            DropForeignKey("dbo.PreferenceSpecificAnimalKind", "SpecificAnimalKind_Id", "dbo.SpecificAnimalKind");
            DropForeignKey("dbo.PreferenceSpecificAnimalKind", "Preference_Id", "dbo.Preference");
            DropForeignKey("dbo.PreferencePuppySize", "PuppySize_Id", "dbo.PuppySize");
            DropForeignKey("dbo.PreferencePuppySize", "Preference_Id", "dbo.Preference");
            DropForeignKey("dbo.ColorPreference", "Preference_Id", "dbo.Preference");
            DropForeignKey("dbo.ColorPreference", "Color_Id", "dbo.Color");
            DropIndex("dbo.CharacterPreference", new[] { "Preference_Id" });
            DropIndex("dbo.CharacterPreference", new[] { "Character_Id" });
            DropIndex("dbo.PreferenceSpecificAnimalKind", new[] { "SpecificAnimalKind_Id" });
            DropIndex("dbo.PreferenceSpecificAnimalKind", new[] { "Preference_Id" });
            DropIndex("dbo.PreferencePuppySize", new[] { "PuppySize_Id" });
            DropIndex("dbo.PreferencePuppySize", new[] { "Preference_Id" });
            DropIndex("dbo.ColorPreference", new[] { "Preference_Id" });
            DropIndex("dbo.ColorPreference", new[] { "Color_Id" });
            DropIndex("dbo.AnimalUserRelation", new[] { "PreferenceId" });
            DropIndex("dbo.AnimalUserRelation", new[] { "AnimalId" });
            DropIndex("dbo.Animal", new[] { "Shelter_Id" });
            DropIndex("dbo.Animal", new[] { "ShelterId" });
            DropColumn("dbo.Animal", "Shelter_Id");
            DropColumn("dbo.Animal", "ShelterId");
            DropTable("dbo.CharacterPreference");
            DropTable("dbo.PreferenceSpecificAnimalKind");
            DropTable("dbo.PreferencePuppySize");
            DropTable("dbo.ColorPreference");
            DropTable("dbo.AnimalUserRelation");
            DropTable("dbo.Shelter");
            DropTable("dbo.Preference");
        }
    }
}
