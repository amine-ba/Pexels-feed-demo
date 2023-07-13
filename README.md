# pexels-feed

#  run the project

1 - Clone the repository

2 - run `cd Pexels-feed-demo`

3 - run `yarn install` then run `npx pod-install`

4 - finally run `yarn ios`


# Performance

- we are using the `@shopify/flash-list` to display the list since it provides perforamance boost in comparaison to typical react-native `FlatList` with a more consistent 60+ Frames per second

- ![image](https://github.com/amine-ba/Pexels-feed-demo/assets/49789676/9ccb6a9c-27df-45a5-b368-040829ec4e79)

# Caching

- Caching has been implemented using the `react-native-fast-image` package, all images will be cached as long as the url remains unchanged

# Pagination 

- we implemented on scroll pagination, when reaching the last 20% of the page it triggers an API call for the next page

- when the new page is loading a loading spinner will be shown at the end while the page is being queried

- After every query we increment the `pageRef` for the next query

- ![image](https://github.com/amine-ba/Pexels-feed-demo/assets/49789676/63122458-b33b-4f79-af22-79a634983922)

# Pull to refresh

- when pulling the list down at the top, the list will be refreshed to the first page

- code to achieve:

- ![image](https://github.com/amine-ba/Pexels-feed-demo/assets/49789676/2a776967-9e2f-433c-9d34-8e53ae26cb19)

- ![image](https://github.com/amine-ba/Pexels-feed-demo/assets/49789676/f4314605-d49c-469c-b576-2550eff4c848)

