import React, { useState } from 'react';
import { PenLine, Sparkles, Save, Download, Book, Plus, BookOpen, Edit, Trash2, User, Heart } from 'lucide-react';

const EroticaWriter = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stories, setStories] = useState([
    { id: 1, title: 'Midnight Encounter', progress: 100, lastEdited: '2 days ago' },
    { id: 2, title: 'The Secret Admirer', progress: 65, lastEdited: 'Yesterday' },
  ]);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [currentPlan, setCurrentPlan] = useState('free');

  // Mock user details
  const userDetails = {
    name: 'Alex Writer',
    plan: 'Free',
    storiesCreated: 2,
    storiesLimit: 2
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-4 border-b border-gray-100">
          <h1 className="text-2xl font-bold text-purple-600 flex items-center">
            <PenLine className="mr-2" size={24} />
            EroticaWriter
          </h1>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${activeTab === 'dashboard' ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-purple-50'}`}
              >
                <BookOpen className="mr-3" size={18} />
                Dashboard
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('create')}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${activeTab === 'create' ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-purple-50'}`}
              >
                <Plus className="mr-3" size={18} />
                Create New
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('library')}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${activeTab === 'library' ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-purple-50'}`}
              >
                <Book className="mr-3" size={18} />
                Library
              </button>
            </li>
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 mr-3">
              <User size={18} />
            </div>
            <div>
              <p className="font-medium">{userDetails.name}</p>
              <p className="text-xs text-gray-500">{userDetails.plan} Plan</p>
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-3 text-sm">
            <p className="text-gray-700 mb-2">Stories: {userDetails.storiesCreated}/{userDetails.storiesLimit}</p>
            <button 
              onClick={() => setShowSubscriptionModal(true)}
              className="w-full bg-purple-600 text-white py-1.5 rounded-lg hover:bg-purple-700 transition"
            >
              Upgrade Plan
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        {activeTab === 'dashboard' && (
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome back, Alex!</h2>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-700 mb-3">Continue Writing</h3>
                {stories.filter(s => s.progress < 100).length > 0 ? (
                  <div className="space-y-4">
                    {stories.filter(s => s.progress < 100).map(story => (
                      <div key={story.id} className="flex items-center justify-between p-3 bg-pink-50 rounded-lg">
                        <div>
                          <h4 className="font-medium">{story.title}</h4>
                          <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                            <div 
                              className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full" 
                              style={{ width: `${story.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <button className="text-purple-600 hover:text-purple-800">
                          <Edit size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 italic">No works in progress</p>
                )}
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-700 mb-3">Completed Stories</h3>
                {stories.filter(s => s.progress === 100).length > 0 ? (
                  <div className="space-y-4">
                    {stories.filter(s => s.progress === 100).map(story => (
                      <div key={story.id} className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <div>
                          <h4 className="font-medium">{story.title}</h4>
                          <p className="text-xs text-gray-500">Last edited: {story.lastEdited}</p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="text-purple-600 hover:text-purple-800">
                            <Edit size={18} />
                          </button>
                          <button className="text-purple-600 hover:text-purple-800">
                            <Download size={18} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 italic">No completed stories yet</p>
                )}
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Quick Start</h3>
              <div className="grid grid-cols-3 gap-4">
                <button className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl hover:from-purple-200 hover:to-pink-200 transition flex flex-col items-center justify-center text-center">
                  <Sparkles className="mb-2 text-purple-600" size={24} />
                  <span className="font-medium text-gray-800">Start from Template</span>
                </button>
                <button className="p-4 bg-gradient-to-br from-pink-100 to-red-100 rounded-xl hover:from-pink-200 hover:to-red-200 transition flex flex-col items-center justify-center text-center">
                  <PenLine className="mb-2 text-pink-600" size={24} />
                  <span className="font-medium text-gray-800">Blank Canvas</span>
                </button>
                <button className="p-4 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl hover:from-red-200 hover:to-orange-200 transition flex flex-col items-center justify-center text-center">
                  <Heart className="mb-2 text-red-500" size={24} />
                  <span className="font-medium text-gray-800">Character Builder</span>
                </button>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'create' && (
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Create a New Story</h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Choose your starting point</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="border-2 border-purple-200 hover:border-purple-400 rounded-xl p-6 cursor-pointer transition">
                  <h4 className="text-xl font-bold text-purple-700 mb-3 flex items-center">
                    <Sparkles className="mr-2" size={20} />
                    Start with a Template
                  </h4>
                  <p className="text-gray-600 mb-4">Choose from our collection of proven story structures and tropes to get started quickly.</p>
                  
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <div className="bg-purple-50 p-3 rounded-lg text-center hover:bg-purple-100 cursor-pointer">
                      <p className="font-medium text-purple-700">Unexpected Encounter</p>
                    </div>
                    <div className="bg-pink-50 p-3 rounded-lg text-center hover:bg-pink-100 cursor-pointer">
                      <p className="font-medium text-pink-700">Secret Affair</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg text-center hover:bg-red-100 cursor-pointer">
                      <p className="font-medium text-red-700">Fantasy Fulfilled</p>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg text-center hover:bg-orange-100 cursor-pointer">
                      <p className="font-medium text-orange-700">Forbidden Desire</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg text-center hover:bg-purple-100 cursor-pointer">
                      <p className="font-medium text-purple-700">Steamy Reunion</p>
                    </div>
                    <div className="text-center p-3">
                      <p className="text-purple-600 hover:text-purple-800">See more...</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-2 border-pink-200 hover:border-pink-400 rounded-xl p-6 cursor-pointer transition">
                  <h4 className="text-xl font-bold text-pink-700 mb-3 flex items-center">
                    <PenLine className="mr-2" size={20} />
                    Start from Scratch
                  </h4>
                  <p className="text-gray-600 mb-4">Begin with a blank page and let your imagination run wild. Our AI will help guide your story development.</p>
                  
                  <div className="mt-4 space-y-4">
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-800 mb-2">Quick Guide:</h5>
                      <ul className="text-gray-600 space-y-2 list-disc pl-5">
                        <li>Define your main characters</li>
                        <li>Choose a setting and time period</li>
                        <li>Establish the core fantasy or desire</li>
                        <li>Add tension or obstacles</li>
                        <li>Plan your climactic moments</li>
                      </ul>
                    </div>
                    
                    <button className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition flex items-center justify-center">
                      <PenLine className="mr-2" size={16} />
                      Start Writing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'library' && (
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Your Story Library</h2>
              <div className="flex space-x-2">
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center">
                  <Plus size={16} className="mr-2" />
                  New Story
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-3 gap-6 p-6">
                {stories.map(story => (
                  <div key={story.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition">
                    <div className="h-40 bg-gradient-to-br from-purple-400 to-pink-500 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Book size={40} className="text-white opacity-50" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-gray-800 mb-1">{story.title}</h3>
                      <p className="text-xs text-gray-500 mb-3">Last edited: {story.lastEdited}</p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                          <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-full">
                            <Edit size={16} />
                          </button>
                          <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-full">
                            <Download size={16} />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded-full">
                            <Trash2 size={16} />
                          </button>
                        </div>
                        {story.progress < 100 && (
                          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 text-xs font-bold">
                            {story.progress}%
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                {userDetails.storiesCreated >= userDetails.storiesLimit && currentPlan === 'free' && (
                  <div className="border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 mb-3">
                      <Plus size={24} />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">Story Limit Reached</h3>
                    <p className="text-sm text-gray-600 mb-3">Upgrade your plan to create more stories</p>
                    <button 
                      onClick={() => setShowSubscriptionModal(true)}
                      className="bg-purple-600 text-white px-4 py-1.5 rounded-lg hover:bg-purple-700 transition text-sm"
                    >
                      Upgrade Now
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Subscription Modal */}
      {showSubscriptionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Choose Your Plan</h2>
            <p className="text-gray-600 mb-6">Unlock your full creative potential with our premium plans</p>
            
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className={`border-2 ${currentPlan === 'free' ? 'border-purple-500 bg-purple-50' : 'border-gray-200'} rounded-xl p-4 cursor-pointer hover:border-purple-300`}>
                <h3 className="font-bold text-xl text-gray-800 mb-1">Free</h3>
                <p className="text-2xl font-bold text-purple-600 mb-2">$0<span className="text-sm font-normal text-gray-500">/month</span></p>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li>• 2 stories per month</li>
                  <li>• Basic templates</li>
                  <li>• Standard export options</li>
                </ul>
                <button className={`w-full py-2 rounded-lg ${currentPlan === 'free' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                  {currentPlan === 'free' ? 'Current Plan' : 'Select Plan'}
                </button>
              </div>
              
              <div className={`border-2 ${currentPlan === 'plus' ? 'border-purple-500 bg-purple-50' : 'border-gray-200'} rounded-xl p-4 cursor-pointer hover:border-purple-300`}>
                <div className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded inline-block mb-2">POPULAR</div>
                <h3 className="font-bold text-xl text-gray-800 mb-1">Plus</h3>
                <p className="text-2xl font-bold text-purple-600 mb-2">$9.99<span className="text-sm font-normal text-gray-500">/month</span></p>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li>• 10 stories per month</li>
                  <li>• Advanced templates</li>
                  <li>• Enhanced AI assistance</li>
                  <li>• Character profile builder</li>
                </ul>
                <button className={`w-full py-2 rounded-lg ${currentPlan === 'plus' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                  {currentPlan === 'plus' ? 'Current Plan' : 'Select Plan'}
                </button>
              </div>
              
              <div className={`border-2 ${currentPlan === 'pro' ? 'border-purple-500 bg-purple-50' : 'border-gray-200'} rounded-xl p-4 cursor-pointer hover:border-purple-300`}>
                <h3 className="font-bold text-xl text-gray-800 mb-1">Pro</h3>
                <p className="text-2xl font-bold text-purple-600 mb-2">$19.99<span className="text-sm font-normal text-gray-500">/month</span></p>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li>• Unlimited stories</li>
                  <li>• All premium templates</li>
                  <li>• Priority AI processing</li>
                  <li>• Advanced editing tools</li>
                  <li>• Kindle-ready formatting</li>
                </ul>
                <button className={`w-full py-2 rounded-lg ${currentPlan === 'pro' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                  {currentPlan === 'pro' ? 'Current Plan' : 'Select Plan'}
                </button>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button 
                onClick={() => setShowSubscriptionModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EroticaWriter;
