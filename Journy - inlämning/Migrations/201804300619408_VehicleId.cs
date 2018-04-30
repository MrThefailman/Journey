namespace Journy___inlämning.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class VehicleId : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetUsers", "VehicleId", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.AspNetUsers", "VehicleId");
        }
    }
}
