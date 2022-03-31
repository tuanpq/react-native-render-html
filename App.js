import React from 'react';
import {SafeAreaView, StatusBar, ScrollView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';

const source = {
  html: `
    <h1 style="margin-top:0px">What are microservices?</h1>
    <p>Microservices - also known as the microservice architecture - is an architectural style that structures an application as a collection of services that are</p>
    <ul>
    <li>Highly maintainable and testable</li>
    <li>Loosely coupled</li>
    <li>Independently deployable</li>
    <li>Organized around business capabilities</li>
    <li>Owned by a small team</li>
    </ul>
    <div>
      The microservice architecture enables the rapid, frequent and reliable delivery of large, complex applications.
      It also enables an organization to evolve its technology stack.
      <div>
        <img src="https://microservices.io/i/Microservice_Architecture.png" />
      </div>
    </div>

    <!-- row -->

    <div>
      <div class="col-md-8 col-md-push-4">
        <h1 style="margin-top:0px">The pattern language is your guide</h1>
        <p>
          The microservice architecture is not a silver bullet.
          It has several drawbacks.
          Moreover, when using this architecture there are numerous issues that you must address.
        </p>
        <p>
          The microservice architecture pattern language is a collection of patterns for applying the microservice architecture.
          It has two goals:
        </p>
        <ol>
          <li>The pattern language enables you to decide whether microservices are a good fit for your application.</li>
          <li>The pattern language enables you to use the microservice architecture successfully.</li>
        </ol>
      </div>
    </div>
  `,
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const {width} = useWindowDimensions();

  return (
    <SafeAreaView style={{backgroundStyle, flex: 1, flexDirection: 'column'}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        style={{flex: 1, flexDirection: 'column', margin: 8}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <RenderHtml contentWidth={width} source={source} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
