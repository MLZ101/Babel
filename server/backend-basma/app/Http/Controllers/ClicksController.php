<?php

namespace App\Http\Controllers;
use App\Models\Clicks;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class ClicksController extends Controller
{
    public function counts(Request $req){               
        $req->validate(['category' =>'required']);
        return $clickCount = Clicks::create($req->all());
    }

    public function aggregates(){
        $start = now()->subDay(); // the options of duration can be changed by changing this value to access (last day, week , or month)
    
        $clicks = DB::table('clicks')
            ->select('category', DB::raw('count(*) as total_clicks'), DB::raw('count(distinct user_id) as unique_clicks'))
            ->where('created_at', '>=', $start)
            ->groupBy('category')
            ->orderBy('total_clicks', 'desc')
            ->limit(6)
            ->get();
    
        return response()->json($clicks);
    }
}



// it is ideal that the RESTful API contains all the CRUD methods,
// but for the task at hand, I kept things simple 