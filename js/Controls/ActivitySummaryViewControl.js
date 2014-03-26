var EmotionApp = window.EmotionApp || {}; 

(function ($, EmotionApp, undefined)
{
    //  ------------------------------------------------------------------------------------------------
    // Options for the widget
    //  ------------------------------------------------------------------------------------------------
    
    var _options = {
        DataProvider: null
    };

    //  ------------------------------------------------------------------------------------------------
    // This function is called by the jQuery widget engine to create the widget.
    //  ------------------------------------------------------------------------------------------------
    var create = function ()
    {
        var self = this;
        var elm = self.element;
        var options = self.options;
        
        var _strings = {
        	SortByText: "Sort Filters: ", 
        	PriceFilterText: "Price: ",
        	DistanceFilterText: "Distance", 
        	MoodFilterText: "Mood", 
        	LabelDoActivity: "Do it!"
        }

        //  ------------------------------------------------------------------------------------------------
        // Instance (global) variables.
        //  ------------------------------------------------------------------------------------------------
 
        var _foo = options.Foo;

        //  ------------------------------------------------------------------------------------------------
        // UI elements.
        //  ------------------------------------------------------------------------------------------------        
        var pnlContainer = null;
        var pnlImageContainer = null; 
        var imgEventImage = null; 
        var pnlInfoContainer = null; 
        var pnlEventName = null; 
        var pnlLocationInfo = null; 
        var pnlDoActivity = null; 
        var chkDoActivity = null; 
        var lblDoActivity = null; 
        var pnlSnapshot = null;
        var pnlPrice = null; 
        var imgPrice = null; 
        
        //  ------------------------------------------------------------------------------------------------
        // Initialization code.
        //  ------------------------------------------------------------------------------------------------
        var Init = function ()
        {
            /// <summary>Initialize the widget's DOM elements.</summary>
			elm.addClass("emotion-activity-summary-view-control"); 
			
            pnlContainer = $("<div />")
                .addClass("pnl-container")
                .appendTo(elm);
                
            pnlImageContainer = $("<div />")
            	.addClass("pnl-image-container")
            	.appendTo(pnlContainer); 
            	
            imgEventImage = $("<img id='eventImage'></img>")
            	.addClass("main-image-display")
            	.appendTo(pnlImageContainer); 
            	                            
            pnlInfoContainer = $("<div />")
            	.addClass("pnl-info-container")
            	.appendTo(pnlContainer);
            	               
            pnlEventName = $("<div />")
            	.addClass("pnl-event-name")
            	.html("Event Name")
            	.appendTo(pnlInfoContainer); 
            	
            pnlLocationInfo = $("<div />")
            	.addClass("pnl-location-info")
            	.appendTo(pnlInfoContainer); 

            pnlDoActivity = $("<div />")
            	.addClass("pnl-do-activity")
            	.appendTo(pnlInfoContainer); 
            	
            chkDoActivity = $("<input type='checkbox' name='do it' value='true' />") 
            	.addClass("chk-do-activity")
            	.appendTo(pnlInfoContainer); 
            	
            lblDoActivity = $("<label />")
            	.addClass("lbl-do-activity")
            	.html(_strings.LabelDoActivity)
            	.prepend(chkDoActivity)
            	.appendTo(pnlDoActivity); 
            	
            pnlSnapshot = $("<div />")
            	.addClass("pnl-snapshot")
            	.appendTo(pnlContainer);
            	
            pnlPrice = $("<div id='pnl-price-stars' />")
            	.addClass("pnl-price-stars")
            	.html(_strings.PriceFilterText)
            	.appendTo(pnlSnapshot)
            	
            imgPrice = $("<img id='priceImage'></img>")
            	.addClass("price-image-display")
            	.appendTo(pnlPrice);     
            	
             pnlDistance = $("<div />")
            	.addClass("pnl-distance")
            	.appendTo(pnlSnapshot); 
        };
        
        var SetValue = function (value)
        {
        	if(value.hasOwnProperty("ActivityName"))
        	{
        		pnlEventName.html(value.ActivityName);
        	}
        	
        	if(value.hasOwnProperty("LocationInfo"))
        	{
        		pnlLocationInfo.html(value.LocationInfo);         	
        	}
        	
        	if(value.hasOwnProperty("ImagePath"))
        	{
        	    imgEventImage.attr("src", value.ImagePath); 
        	}
        	
        	if(value.hasOwnProperty("PriceStars"))
        	{
        		if(value.PriceStars === 4)
        		{
        			imgPrice.attr("src", "./img/sample-images/47px-4-stars.png"); 
        		}
        	}
        	
        	if(value.hasOwnProperty("Distance"))
        	{
        		pnlDistance.html("Distance: " + value.Distance); 
        	}
        		
        };
        
        var GetValue = function ()
        {
        	return {
        		ActivityName: pnlEventName.innerHTML,
        		LocationInfo: pnlLocationInfo.innerHTML,
        		ImagePath: imgEventImage.attr("src")
        	};
        };
        
        var Value = function (value)
        {
        	if(value === undefined)
        	{	
        		return GetValue(); 
        	}
        	else
        	{
        		SetValue(value);
        	}
        };

        var Clear = function ()
        {
            // Put the widget into some neutral state.
        };

        //  ------------------------------------------------------------------------------------------------
        // Public methods
        //  ------------------------------------------------------------------------------------------------
        
        self.Value = Value; 
        
        Init();
    };

    //  ------------------------------------------------------------------------------------------------
    // This function is called by the jQuery widget engine to destroy the widget.
    //  ------------------------------------------------------------------------------------------------
    var destroy = function ()
    {
        /// <summary> Use the destroy method to clean up any modifications your widget has made to the DOM </summary>

        // clear things created by us
        this.element.children().remove();
        // invoke the destroy method from the base widget
        this.element.removeData(this.widgetName);
        $.Widget.prototype.destroy.call(this);
    };

    //  ------------------------------------------------------------------------------------------------
    // Create the jQuery widget class
    //  ------------------------------------------------------------------------------------------------
    $.widget("EmotionApp.ActivitySummaryViewControl", {
        options: _options,
        _create: create,
        destroy: destroy
    });
})(jQuery, EmotionApp);