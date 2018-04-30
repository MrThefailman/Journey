namespace Journy___inlämning.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class VehicleRegNr : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetUsers", "VehicleRegNr", c => c.String());
            DropColumn("dbo.AspNetUsers", "VehicleId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.AspNetUsers", "VehicleId", c => c.Int(nullable: false));
            DropColumn("dbo.AspNetUsers", "VehicleRegNr");
        }
    }
}
